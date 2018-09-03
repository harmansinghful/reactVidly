import _ from "lodash";

//Paginating Data on the client side
export default function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //   convert items array to a lodash wrapper
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
