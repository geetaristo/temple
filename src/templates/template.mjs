export class Template {
  constructor(data, elemId){
    this.data = data
    this.elemId = elemId
    this.elem = document.getElementById(elemId)
  }

  render () {
    this.elem.innerHTML = 
    `
    <div>
      Default template rendering '${this.data}' into ${this.elemId} ... you must override this method.
    </div>
    `
  }
}
