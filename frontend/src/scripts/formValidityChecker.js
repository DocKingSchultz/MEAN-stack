function openPopupWindow(url, width, height, rectangles, doors, confirmBool) {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const left = (screenWidth - width) / 2;
  const top = (screenHeight - height) / 2;

  const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;

  // Open the pop-up window
  const popupWindow = window.open('', '_blank', features);

  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Draw on the canvas
  rectangles.forEach(rect => {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.length);
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.length);
  });
  doors.forEach(door => {
    ctx.fillStyle = 'brown'; // Set the fill color for the door frame
    ctx.fillRect(door.x, door.y, 11, 20);
  
    // Draw the doorknob
    const knobSize = 6; // Adjust the size of the doorknob
    const knobX = door.x +2;
    const knobY = door.y + 2;
    ctx.fillStyle = 'silver'; // Set the fill color for the doorknob
    ctx.fillRect(knobX, knobY, knobSize, knobSize);
  });
  if(confirmBool)
  {
    ctx.fillStyle = 'black';
    ctx.font = '14px Arial';
    ctx.fillText('Pregled ubacenog objekta', 90, 200);
  }
  else
  {
    ctx.fillStyle = 'black';
    ctx.font = '14px Arial';
    ctx.fillText('Pregled objekta', 120, 200);
  }

  // Append the canvas to the pop-up window's document
  popupWindow.document.body.appendChild(canvas);

  // Close the pop-up window when the canvas is clicked
  canvas.addEventListener('click', () => {
    popupWindow.close();
  });
}
function drawSketch(rectangles, confirmBool, doors) {
  if(confirmBool)url= 'Pregled ubacenog objekta';
  else url= 'Pregled objekta';
const width = 600;
const height = 400;

openPopupWindow(url, width, height, rectangles, doors, confirmBool);
}

function checkPasswordMatching(pass, confpass) {
    if (pass == confpass) {
      return true;
    }
    alert("Passwords don't match")
    return false;
  }

  function checkIfAllFieldsAreFilled(formName) {
    let allAreFilled = true;
    document.getElementById(formName).querySelectorAll("[required]").forEach(function (i) {
      if (!allAreFilled) return true;
      if (i.type === "radio") {
        let radioValueCheck = false;
        document.getElementById("myForm").querySelectorAll(`[name=${i.name}]`).forEach(function (r) {
          if (r.checked) radioValueCheck = true;
        })
        allAreFilled = radioValueCheck;
        return true;
      }
      if (!i.value) { allAreFilled = false; return true; }
    })
    if (!allAreFilled) {
      alert('Popuni sva polja');
      return false;
    }
    return true;
  }

  function checkPasswordRegularity(password) {
    if (!password.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?])[A-Za-z][A-Za-z0-9!@#$%^&*()_\-+=<>?]{6,11}$/)) {
      alert('Password need to have ...');
      return false;
    }
    return true;
  }
