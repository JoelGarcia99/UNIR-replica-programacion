import data from '../data/data.json';

const loadData = (from, to)=>data["data"].slice(from-1, to);

export {loadData}