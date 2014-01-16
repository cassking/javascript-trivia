var trivia = [



    // 0. value comparison

    function () {
        var one = 1;
        var One = 1;

        return one === One;
    },

    // A. true
    // B. false
    // C. (error)
    // D. (none of the above)



    // 1. re-declare variable

    function () {
        var obj = {};
        var obj = {};

        return obj === obj;
    },

    // A. true
    // B. false
    // C. (error)
    // D. (none of the above)



    // 2. missing semicolon

    function () {
        var array = []
        [1, 2].forEach(function (value) {
            array.push(value);
        });
        return array;
    },

    // A. []
    // B. [1, 2]
    // C. (error)
    // D. (none of the above)



    // 3. missing semicolon

    function () {
        return

        1 + 1;
    },

    // A. 2
    // B. "2"
    // C. undefined
    // D. (none of the above)



    // 4. object comparison

    function () {
        var obj = {};
        var Obj = {};

        return obj === Obj;
    },

    // A. true
    // B. false
    // C. (error)
    // D. (none of the above)



    // 5. type coercion

    function () {
        return null == undefined && undefined == null;
    },

    // A. true
    // B. false
    // C. (error)
    // D. (none of the above)



    // 6. integer arithmetic

    function () {
        return 0.1 + 0.2;
    },

    // A. 3
    // B. 0.3
    // C. (error)
    // D. (none of the above)



    // 7. infinity arithmetic

    function () {
        return Infinity - 1;
    },

    // A. 1.7976931348623157e+308
    // B. Infinity
    // C. 0
    // D. -1



    // 8. primitive methods

    function () {
        return 'hello'.toUpperCase();
    },

    // A. 'HELLO'
    // B. (error)
    // C. -1
    // D. 'hello'



    // 9. primitive methods

    function () {
        return NaN == NaN;
    },

    // A. true
    // B. false
    // C. -1
    // D. NaN



    // 10. immutable primitives

    function () {
        var string = 'hello';

        string.toUpperCase();

        return string;
    },

    // A. 'hello'
    // B. 'HELLO'
    // C. undefined
    // D. (none of the above)



    // 11. variable scope, coercion to NaN, NaN arithmetic

    function () {
        var a = 1;
        var b = 2;

        var add = function (a, b) {
            return a + b;
        };

        return add();
    },

    // A. undefined
    // B. NaN
    // C. 3
    // D. (error)



    // 12. property access

    function () {
        var user = { firstName: 'Bobby', lastName: 'Clams' };

        return user.firstName === user['firstName'] === user[firstName];
    },

    // A. true
    // B. false
    // C. (error)
    // D. (none of the above)



];
