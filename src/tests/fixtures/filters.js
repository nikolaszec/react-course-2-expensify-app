
import moment from 'moment'

const filters = {

    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'date'
}

const altFilters = {

    text:'abcd',
    sortBy:'amount',
    startDate:moment(0),
    endDate:moment(0).add(3,'days')
}

export {filters, altFilters}