const { service } = require('./../services')

const controller = async (req, res, next) => {
	try {
		if (1) {
			if (1) {
				res.setHeader('Content-Type', 'text/plain');
                
                service();
				res.send("Service done");
			} else {
				return res.status(401).send({
					error: `Erreur 401`
				})
			}
		} else {
			return res.status(400).send({
				error: "Erreur 400"
			})
		}
	} catch (error) {
		res.status(402).send({
			error: error.message
		})
	}
};

module.exports = {
    controller
}