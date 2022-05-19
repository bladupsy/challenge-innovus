import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  listOParticipants = ['Silvia', 'Pedro', 'Augusto', 'Julia', 'Paola', 'Felipe']
  rankingOfParticipants = ['Silvia', 'Pedro', 'Augusto', 'Julia', 'Paola', 'Felipe']



  constructor() {
      //Eliminar a Felipe
      this.listOParticipants.pop()
      // this.listOParticipants.sort()
      // this.listOParticipants.slice(0, )
      // this.listOParticipants.push('Jose', 'Claudia')
      // this.listOParticipants.add()
      //Agrega a Micaela
      this.listOParticipants.unshift('Micaela')

  }

  ngOnInit(): void {
  }


}
