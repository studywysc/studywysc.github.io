const client = algoliasearch('Q71HM8430Y', '7f42b7cbd41474bf777414c24302d4a4');
const players = client.initIndex('players');
const teams = client.initIndex('teams');

autocomplete(
  '#aa-search-input',
  {
    debug: true,
    templates: {
      dropdownMenu:
        '<div class="aa-dataset-player"></div>'
    },
  },
  [
    {
      source: autocomplete.sources.hits(players, {hitsPerPage: 7}),
      displayKey: 'name',
      name: 'player',
      templates: {
        header: '<div class="aa-suggestions-category">Players</div>',
        suggestion({_highlightResult}) {
          return `<span>${_highlightResult.name.value}</span><span>${_highlightResult.team.value}</span>`;
        },
        empty: '<div class="aa-empty">No matching players</div>',
      },
    }
  ]
);