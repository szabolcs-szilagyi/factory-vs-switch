import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private collectedSwitchData = [
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

  private collectedFactoryData = [
    {
      dataType: 'monsters',
      data: [
        {
          "index": "aboleth",
          "name": "Aboleth",
          "url": "/api/monsters/aboleth"
        },
        {
          "index": "acolyte",
          "name": "Acolyte",
          "url": "/api/monsters/acolyte"
        },
        {
          "index": "adult-black-dragon",
          "name": "Adult Black Dragon",
          "url": "/api/monsters/adult-black-dragon"
        },
      ]
    },
    {
      dataType: 'spells',
      data: [
        {
          "index": "color-spray",
          "name": "Color Spray",
          "url": "/api/spells/color-spray"
        },
        {
          "index": "disguise-self",
          "name": "Disguise Self",
          "url": "/api/spells/disguise-self"
        },
        {
          "index": "illusory-script",
          "name": "Illusory Script",
          "url": "/api/spells/illusory-script"
        },
      ]
    }
  ];


  title = 'factory-over-switches';
  selectedData = this.collectedSwitchData[0];
  selectedMonsterSpellData = this.collectedFactoryData[0];

  featurePicked(event: any) {
    this.selectedData = this.collectedSwitchData[event]
  }

  monsterSpellPicked(event: any) {
    this.selectedMonsterSpellData = this.collectedFactoryData[event]
  }
}
