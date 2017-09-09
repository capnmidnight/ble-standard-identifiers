"use strict";

export default function makeLookup(descriptions) {
  const table = {},
    all = Object.keys(descriptions)
    .map( (id) => {
      table[descriptions[id]] = id;
      return parseInt(id, 16);
    });

  function description(id) {
    /*
      The UUIDs that GATT uses are quite long, unnecessarily so. The first 8 digits
      (4 bytes) are guaranteed to be unique amongst all Services, Characteristics,
      and Descriptors, because there just aren't that many of them.
    */
    id = id.substring(0, 8).toLocaleUpperCase();
    return descriptions[id] || id;
  }

  function id(description) {
    return table[description];
  }

  return {
    all,
    id,
    description
  };
}
