import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = event => {

        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-bold">Add Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>





                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>






                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>



                <div className="mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>




                <input className="btn btn-block bg-black text-white" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;