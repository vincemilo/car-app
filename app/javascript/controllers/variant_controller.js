import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'color' ]
  static classes = ['change']

  connect() {
    this.colorTarget.classList.add(this.changeClass)    
  }

  add() {
    this.colorTarget.classList.toggle(this.changeClass)
  }
}
