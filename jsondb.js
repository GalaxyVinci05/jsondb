const { promisify } = require('util');
const { writeFile, unlink } = require('fs');
const { resolve } = require('path');

const writeDB = promisify(writeFile);
const deleteDB = promisify(unlink);

class JsonDB {
    filename;
    size;

    /**
     * @constructor
     * @param {string} [filename] The json db's file name
     */

    constructor(filename) {
        this.filename = filename;
        const file = resolve(__dirname, this.filename ? `./data/${this.filename}.json` : './data/jsondb.json');

        try {
			this.size = require(file).length;
		} catch {
			this.size = 0;
		}
    }

    /**
     * @method
     * @description Appends data to the json db
     * @param data The data to add to the json db
     * @returns undefined
     */

    async add(data) {
        const filename = resolve(__dirname, this.filename ? `./data/${this.filename}.json` : './data/jsondb.json');
        
        try {
            const jsonModule = require(filename);
            jsonModule.push(data);
            
            await writeDB(filename, JSON.stringify(jsonModule));
        } catch {
            await writeDB(filename, `[${JSON.stringify(data)}]`);
        }
    }
    
    /**
     * @method
     * @description Gets a specific array element from the json db
     * @param {number} index The index of the specific array element in the json db
     * @returns The array element's data or undefined
     */

    get(index) {
        if (typeof index !== 'number') {
            throw new TypeError('Index must be a number');
        }

        const filename = resolve(__dirname, this.filename ? `./data/${this.filename}.json` : './data/jsondb.json');
        
        try {
            const jsonModule = require(filename);

            if (jsonModule[index] || jsonModule[index] == 0) {
                return jsonModule[index];
            } else {
                return undefined;
            }
        } catch {
            return undefined;
        }
    }

    /**
     * @method
     * @description Removes a specific array element from the json db
     * @param {number} index The index of the specific array element in the json db
     * @returns true or false
     */

    async remove(index) {
        if (typeof index !== 'number') {
            throw new TypeError('Index must be a number');
        }

        const filename = resolve(__dirname, this.filename ? `./data/${this.filename}.json` : './data/jsondb.json');
        
        try {
            const jsonModule = require(filename);

            if (jsonModule[index] || jsonModule[index] == 0) {
                jsonModule.splice(index, 1);
    
                await writeDB(filename, JSON.stringify(jsonModule));
                return true;
            } else {
                return false;
            }
        } catch {
            return false;
        }
    }

    /**
     * @method
     * @description Clears all the json db's data
     * @returns undefined
     */

    async clear() {
        const filename = resolve(__dirname, this.filename ? `./data/${this.filename}.json` : './data/jsondb.json');
        
        try {
            await writeDB(filename, JSON.stringify([]));

            return undefined;
        } catch {
            return undefined;
        }
    }

    /**
     * @method
     * @description Deletes the json db
     * @returns undefined
     */

    async delete() {
        const filename = resolve(__dirname, this.filename ? `./data/${this.filename}.json` : './data/jsondb.json');
        
        try {
            await deleteDB(filename);

            return undefined;
        } catch {
            return undefined;
        }
    }
}

module.exports = JsonDB;
