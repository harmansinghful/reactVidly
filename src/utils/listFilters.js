import _ from "lodash";

export default function listFilters(movies) {
  let filters = [];
  let all = ["All Genres"];
  _.forEach(movies, function(obj) {
    filters.push(obj.genre.name);
  });
  filters = _.concat(all, _.uniq(filters));
  return filters;
  //   console.log(_.get(object, 'object.'));
}
