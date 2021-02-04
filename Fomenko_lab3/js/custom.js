function isLannisterSoldier(color, shield) {
    var result = shield === 'lion' || (color === 'red' && shield === null);
    return result;
}

isLannisterSoldier('red', 'lion');
isLannisterSoldier('blue', null);