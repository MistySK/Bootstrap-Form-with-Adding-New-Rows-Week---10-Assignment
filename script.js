


const addResourceForm = document.getElementById('addResourceForm');
const addResourceButton = document.getElementById('addResourceButton');

addResourceButton.addEventListener('click', addResource);

function addResource() {
  // Get the input values
  const type = document.getElementById('type').value;
  const name = document.getElementById('name').value;
  const url = document.getElementById('url').value;
  const comments = document.getElementById('comments').value;

  // Create a new table row
  const row = document.createElement('tr');

  // Create table cells and add the input values
  const typeCell = document.createElement('td');
  typeCell.textContent = type;
  row.appendChild(typeCell);

  const nameCell = document.createElement('td');
  nameCell.textContent = name;
  row.appendChild(nameCell);

  const urlCell = document.createElement('td');
  urlCell.textContent = url;
  row.appendChild(urlCell);

  const commentsCell = document.createElement('td');
  commentsCell.textContent = comments;
  row.appendChild(commentsCell);

  // Add the table row to the table body
  const resourcesTableBody = document.getElementById('resourcesTableBody');
  resourcesTableBody.appendChild(row);

  document.getElementById("type").value = "";
  document.getElementById("name").value = "";
  document.getElementById("url").value = "";
  document.getElementById("comments").value = "";
}

/*<script>
function addResource() {
    // Get form values
    const type = document.getElementById("Type").value;
    const name = document.getElementById("Name").value;
    const URL = document.getElementById("URL").value;
    const comments = document.getElementById("Comments").value;

    // Create a new table row
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${type}</td>
      <td>${name}</td>
      <td>${URL}</td>
      <td>${comments}</td>
    `;

    // Append the new row to the table body
    document.getElementById("resourcesTableBody").appendChild(newRow);

    // Clear form inputs
    document.getElementById("type").value = "";
    document.getElementById("name").value = "";
    document.getElementById("URL").value = "";
    document.getElementById("comments").value = "";
  }
</script>*/