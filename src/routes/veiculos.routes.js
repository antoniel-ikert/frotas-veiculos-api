 veiculosrouter.get("/", async (req,res) =>{
    const cliente = await veiculosservice.getALL(); 
    return res.json(veiculos);
});
 veiculosrouter.post("/", async (req,res) =>{
    const cliente = await veiculosservice.create(req.body); 
    return res.status(201).json(veiculos);
});