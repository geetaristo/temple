export class Welcome {
  constructor(data, elemId){
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