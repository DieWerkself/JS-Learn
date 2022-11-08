document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value.split('\n');
  console.log(text.entries());
  for (const [i, edit] of text.entries()) {
    const [first, second] = edit.toLowerCase().trim().split('_');
    const ccText = first + second.replace(second[0], second[0].toUpperCase());
    console.log(`${ccText.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// converCC('underscore_case');
