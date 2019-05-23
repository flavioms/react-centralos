import * as moment from 'moment'; 
import 'moment/locale/pt-br';
moment.locale('pt-br');

const convertDate = (data) => {
    return moment(data).format('LLL');
}

export default convertDate;