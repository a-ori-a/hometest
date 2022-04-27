var editor = ace.edit("editor");
var code;
var saveBtn = document.getElementById('saveBtn');
var jsBtn = document.getElementById('jsBtn');
var htmlBtn = document.getElementById('htmlBtn');
editor.$blockScrolling = Infinity;
editor.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true
});
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

saveBtn.addEventListener('click', async () => {
  code = editor.getValue()
  let share = {text:code}
  await navigator.share(share);
  navigator.clipboard.writeText(code);
});
jsBtn.addEventListener('click', async () => {
  editor.getSession().setMode("ace/mode/javascript");
});
htmlBtn.addEventListener('click', async () => {
  editor.getSession().setMode('ace/mode/html');
});
function autoSave() {
  code = editor.getValue()
  document.cookie = 'code=';
  document.cookie = 'code='+code;
  console.log(code)
}
setInterval(autoSave,100);