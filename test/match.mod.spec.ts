import { assert } from 'chai';
import { match } from '../src';
import { strike } from '../src/functions';

describe('match.mod', () => {
    it('should re-export strike.fn', () => {
        // arrange

        // act

        // assert
        assert.strictEqual(match.strike, strike);
    });
});
