const { BaseRepository } = require('../../../base');

class PrevisionRepository extends BaseRepository {
    constructor({ db }) {
        super(db, 'prevision');
        this._db = db;
    }
}
module.exports = PrevisionRepository;