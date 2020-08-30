import alltests from '../../store/all.js';

const testFilter = function(test, level) {
  let testfilter = alltests.filter(item => item.book===test);
  if(level !== 'all'){
    testfilter = testfilter.filter(item => item.level===level);
}
  return testfilter;
}

export default testFilter;
