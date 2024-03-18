const InvalidParamException = require('../exceptions/invalid.param.exception');
const InvalidRequestException = require('../exceptions/invalid-request');


// Add fruits
const create = (request, response, next) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fData = {
                fruitId: request.body.fruitId,
                fruitName: request.body.fruitName,
                fruitPrice: request.body.fruitPrice,
                fruitType: request.body.fruitType,
                nutrition: request.body.nutrition,
            }

            const fruitData = await db.fruit.findOne({
                where: {
                    fruitId: request.body.fruitId,
                    is_active: 1
                }
            });
            if (fruitData) {
                throw new InvalidRequestException('fruit already exists')
            }
            const fruitDataPayload = await db.fruit.create(fData)
            resolve(
                response.json({
                    success: true,
                    message: 'fruit added successfully',
                    result: fruitDataPayload
                })
            )
        } catch (error) {
            next(error)
        }
    })
}

// Fetching all fruits
const fetchAll = (request, response, next) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fruitData = await db.fruit.findAll({ where: { is_active: 1 } })
            const totalcount = await db.fruit.count({ where: { is_active: 1 } })
            resolve(
                response.json({
                    success: true,
                    message: 'fruits fetched successfully',
                    count: totalcount,
                    result: fruitData
                })
            )
        } catch (error) {
            next(error)
        }
    })
}

// Fetching fruit by fruitId
const fetchOne = (request, response, next) => {
    return new Promise(async (resolve, reject) => {
        try {
            const Id = parseInt(request.params.fruitId)
            const fruitData = await db.fruit.findOne({
                where: { fruitId: Id, is_active: 1 },
            });
            if (!fruitData) {
                throw new InvalidParamException('The fruit not found.')
            }
            resolve(
                response.json({
                    success: true,
                    message: 'fruit fetched successfully',
                    result: fruitData
                })
            )
        } catch (error) {
            next(error)
        }
    })
}

// Updating fruit by fruitId
const update = (request, response, next) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fruit_id = parseInt(request.params.fruitId)
            const fruitData = await db.fruit.findOne({
                where: { fruitId: fruit_id, is_active: 1 }
            });
            if (!fruitData) {
                throw new InvalidParamException('fruit not found.')
            }
            const fryitDataPayload = await db.fruit.update({
                fruitName: request.body.fruitName,
                fruitPrice: request.body.fruitPrice,
                fruitType: request.body.fruitType,
                nutrition: request.body.nutrition,
            }, {
                where: { fruitId: fruit_id }
            });
            resolve(
                response.json({
                    success: true,
                    message: 'fruit updated successfully',
                    result: {}
                })
            )
        } catch (error) {
            next(error)
        }
    })
}

const deletefruitData = (request, response, next) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fruit_id = parseInt(request.params.fruitId)
            const fruitData = await db.fruit.findOne({
                where: { fruitId: fruit_id, is_active: 1 }
            });
            if (!fruitData) {
                throw new InvalidParamException('fruit not found.')
            }
            const fryitDataPayload = await db.fruit.update({
                is_deleted: 1,
                is_active: 0
            }, {
                where: { fruitId: fruit_id }
            });
            resolve(
                response.json({
                    success: true,
                    message: 'fruit deleted successfully',
                    result: {}
                })
            )
        } catch (error) {
            next(error)
        }
    })
}


module.exports = { create, fetchAll, fetchOne, update, deletefruitData }