const { src, dest, watch } = require('gulp');

const modules = [
  "ControlPanel", "Display"
]

function moveJS() {
  watch(['modules/*/*.js'], () => {
    return modules.map(
      v => src(`./modules/${v}/*.js`)
      .pipe(
        dest(`./modules/${v}/js/`)
      )
    )
  });
}

exports.default = moveJS;