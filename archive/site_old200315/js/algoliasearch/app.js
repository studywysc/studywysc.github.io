const client = algoliasearch('HRA929IBAN', '47962dcf70705d6573033e09f6d70ebe');
const players = client.initIndex('Wysc');

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
      displayKey: 'title',
      templates: {
        suggestion({_highlightResult}) {
          return `<a href="${_highlightResult.url.value}"><b>${_highlightResult.title.value}</b><br><span>${_highlightResult.content.value}</span></a>`;
        },
        empty: '<div class="aa-empty">No matching docs</div>',
      },
    }
  ]
);