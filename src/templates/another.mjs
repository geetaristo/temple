import { Template } from './template.mjs'
export class Another extends Template {
  constructor(data, elemId){
    this.data = data
    this.elemId = elemId
    this.elem = document.getElementById(elemId)
  }

  render () {
    this.elem.innerHTML = 
    `
    <div>
      Another Template ${this.data} into ${this.elemId}
    </div>
    `
  }
}
