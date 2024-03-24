function Numbering(list) {
  let nr = 1;
  list.forEach(item => {
    item.nr = nr;
    nr++;
  });
}

export default Numbering;
