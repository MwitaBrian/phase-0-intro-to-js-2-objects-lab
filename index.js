const employee = {
  name: 'Brian Mwita',
  streetAddress: 'Munich 797'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    name: "Sam",
    streetAddress: "11 Broadway"
  }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newObj = {...employee};
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}