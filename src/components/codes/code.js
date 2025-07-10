import covid19 from './covid19';
import cyclistic from './cyclistic';
import nashville from './nashville';
import a from './a';
import s from './s';
import y from './y';
import n from './n';

const Code = (code) => {
  switch (code) {
    case 'N':
      return n;
    case 'A':
      return a;
    case 'S':
      return s; 
    case 'Y':
      return y;     
    case 'Covid19':
      return covid19;
    case 'Cyclistic':
      return cyclistic;
    case 'Nashville':
      return nashville;
    default:
      return '';
  }
};

export default Code;