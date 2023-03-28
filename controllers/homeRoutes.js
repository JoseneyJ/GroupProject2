router.get("/products", async (req, res) => {
  // id === 'houseplants'
  try {
    // Get all products and JOIN with user data
    const productData = await Product.findAll();

    // Serialize data so the template can read it
    const products = productData.map((product) => product.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("products", {
      products,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const product = productData.get({ plain: true });

    res.render("product", {
      ...product,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
