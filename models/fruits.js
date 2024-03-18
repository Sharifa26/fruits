module.exports = (sequelize, DataTypes) => {
    const fruit = sequelize.define(
        'fruit',
        {
            fruitId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            fruitName: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            fruitPrice: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            fruitType: {
                type: DataTypes.ENUM('organic', 'non organic'),
            },
            nutrition: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            is_active: {
                type: DataTypes.TINYINT,
                default: 1
            },
            is_deleted: {
                type: DataTypes.TINYINT,
                default: 0
            }
        },
        {
            timestamps: false,
            tableName: 'fruit',
        }
    );
    return fruit;
}