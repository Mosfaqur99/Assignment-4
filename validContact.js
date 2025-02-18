function validContact(contact) {
  if (Array.isArray(contact) === true || typeof contact === "boolean") {
    let Reply = "Invalid";
    return Reply;
  } else {
    let NumOfSpace = contact.split(" ").length - 1;
    let startsWith = contact.slice(0, 2);
    let length = contact.length;
    if (startsWith === "01" && length === 11) {
      return true;
    } else if (length !== 11 || NumOfSpace >= 1 || startsWith !== "01") {
      return false;
    }
  }
}

const Contact = validContact(["01631545747"]);
console.log(Contact);
