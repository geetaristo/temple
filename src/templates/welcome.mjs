import { Template } from './template.mjs'
export class Welcome extends Template {
  constructor(data, elemId){
    super()
    this.data = data
    this.elemId = elemId
    this.elem = document.getElementById(elemId)
  }

  render () {
    this.elem.innerHTML = 
    `
    <div>
      Hello World... putting ${this.data} into ${this.elemId}
    </div>
    `
  }
}
