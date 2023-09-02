import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private collectedData = [
    {
      dataType: 'character-class',
      data: [
        {
          index: 'barbarian',
          name: 'Barbarian',
          url: '/api/classes/barbarian'
        },
        {
          index: 'bard',
          name: 'Bard',
          url: '/api/classes/bard'
        },
        {
          index: 'cleric',
          name: 'Cleric',
          url: '/api/classes/cleric'
        }
      ]
    },
    {
      dataType: 'item-feature',
      data: [
        {
          index: 'action-surge-1-use',
          name: 'Action Surge (1 use)',
          url: '/api/features/action-surge-1-use'
        },
        {
          index: 'action-surge-2-uses',
          name: 'Action Surge (2 uses)',
          url: '/api/features/action-surge-2-uses'
        },
        {
          index: 'additional-fighting-style',
          name: 'Additional Fighting Style',
          url: '/api/features/additional-fighting-style'
        }
      ]
    }
  ];

  title = 'factory-over-switches';
  selectedData = this.collectedData[0];

  featurePicked(event: any) {
    this.selectedData = this.collectedData[event]
  }
}
