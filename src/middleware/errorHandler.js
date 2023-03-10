const errorHandler = async (err, req, res, next) => {
    console.error(err)
    return res.json({
        message: `Error: ${err.message}`,
        url: req.url,
        success: false
    })
}

module.exports = errorHandler;