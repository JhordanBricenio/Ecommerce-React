export const color = [
  "White",
  "Black",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Pink",
  "Purple",
  "Orange",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "White", label: "White" },
      { value: "Black", label: "Black" },
      { value: "Red", label: "Red" },
      { value: "Blue", label: "Blue" },
      { value: "Green", label: "Green" },
      { value: "Yellow", label: "Yellow" },
      { value: "Pink", label: "Pink" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "XS", label: "XS" },
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
      { value: "XXL", label: "XXL" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "0-100", label: "$0-$100" },
      { value: "100-200", label: "$100-$200" },
      { value: "200-300", label: "$200-$300" },
      { value: "300-400", label: "$300-$400" },
      { value: "400-500", label: "$400-$500" },
      { value: "500-600", label: "$500-$600" },
      { value: "600-700", label: "$600-$700" },
      { value: "700-800", label: "$700-$800" },
      { value: "800-900", label: "$800-$900" },
      { value: "900-1000", label: "$900-$1000" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "0-10", label: "0%-10%" },
      { value: "10-20", label: "10%-20%" },
      { value: "20-30", label: "20%-30%" },
      { value: "30-40", label: "30%-40%" },
      { value: "40-50", label: "40%-50%" },
      { value: "50-60", label: "50%-60%" },
      { value: "60-70", label: "60%-70%" },
      { value: "70-80", label: "70%-80%" },
      { value: "80-90", label: "80%-90%" },
      { value: "90-100", label: "90%-100%" },
    ],
  },
  {
    id:"stock",
    name:"Availability",
    options:[
      {value:"In Stock", label:"In Stock"},
      {value:"Out of Stock", label:"Out of Stock"}
    ]
  }
];
