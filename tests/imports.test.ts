describe('import vue components', () => {

//when adding import path, use ``(backticks) and don't use ''(single quotes)

    test('normal imports as expected', async () => {
        const cmp = await import(`../components/ProductCard.vue`)
        expect(cmp).toBeDefined()
    })

    test('template string imports as expected', async () => {
        const cmp = await import(`../components/ProductCard.vue`)
        expect(cmp).toBeDefined()
    })


    test('dynamic imports as expected', async () => {
        const name = 'ProductCard';
        const cmp = await import(`../components/${name}.vue`);
        expect(cmp).toBeDefined();
      });
})