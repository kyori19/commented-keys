import {NextApiHandler} from "next";
import {commentedKeys, invalidUserNameError, joinMessage, unknownError} from "./messages";
import {queryString} from "./queryString";

const FetchKeys: NextApiHandler = async (req, res) => {
    const domain = req.headers.host!;
    const userName = queryString(req.query.username);

    if (!/^[a-zA-Z0-9]+$/.test(userName)) {
        return res.status(400).send(joinMessage(domain, invalidUserNameError(userName)));
    }

    const result = await fetch(`https://github.com/${userName}.keys`);

    if (result.status === 404) {
        return res.status(404).send(joinMessage(domain, invalidUserNameError(userName)));
    }

    if (result.status !== 200) {
        return res.status(500).send(joinMessage(domain, unknownError(await result.text())));
    }

    return res.status(200).send(joinMessage(domain, commentedKeys(userName, await result.text())));
}

export default FetchKeys;
