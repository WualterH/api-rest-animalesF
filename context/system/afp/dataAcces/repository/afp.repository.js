const { BaseRepository } = require('../../../base');

class AfpRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "afp");
        this._db = db;
    }
}
module.exports = AfpRepository;