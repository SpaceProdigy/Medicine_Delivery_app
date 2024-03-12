const SchemaDrugsList = arr => {
  const seller = {
    '@type': 'Organization',
    name: 'Drugs 24',
  };

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Drugs list',
    numberOfItems: arr.length,
    itemListElement: arr.map(({ name, activeIngredient, price }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Drug',
        name: name ? name : null,
        activeIngredient: activeIngredient ? activeIngredient : null,
        offers: {
          '@type': 'Offer',
          price: price ? price.toFixed(2) : null,
          priceCurrency: 'USD',
          availability:
            arr.length > 0
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
        },
      },
    })),
    seller,
  };

  return JSON.stringify(jsonLdData);
};

export default SchemaDrugsList;
