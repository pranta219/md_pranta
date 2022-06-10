import React from 'react';
import bicycle from '../../Images/bicyclr.png'
import woodtoy from '../../Images/woodtoy.png'
import gym from '../../Images/gym.png'
import mobile from '../../Images/mobile.png'
import watch from '../../Images/watch.png'
import like from '../../Images/like.png'

const Projects = () => {
    return (
        <div>
            <h2 className='text-3xl text-center'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-40 my-20'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-60' src={bicycle} alt="" /></figure>

                    <div className="card-body">
                        <h2 className="card-title">Bicycle Parts Manufacture</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <label for="my-modal-4" class="btn modal-button">View Details</label>
                        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                        <label for="my-modal-4" class="modal cursor-pointer">
                            <label class="modal-box relative" for="">
                                <h3 class="text-lg font-bold">Bicycle Parts Manufacture</h3>
                                <a href="https://bicycle-parts-83ec4.web.app/" target={'https://bicycle-parts-83ec4.web.app/'}><button class="btn btn-active btn-link">Live Site </button></a>
                                <p class="py-4">●About website <br />
                                    - Developed a Bicycle Parts Manufacturer web site with user and admin dashboard
                                    functionality. <br />
                                    - Maintained 100% responsiveness for mobile users to view the web site. <br />
                                    - Controlled register and login system using google firebase authentication system. <br />
                                    ●Tecnology <br />
                                    - React.js, Node.js, Express.js, MongoDB, Tailwind, Firebase.</p>
                            </label>
                        </label>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-60' src={woodtoy} alt="" /></figure>

                    <div className="card-body">
                        <h2 className="card-title">Wood Toys Shop</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <label for="my-modal-4" class="btn modal-button">View Details</label>
                        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                        <label for="my-modal-4" class="modal cursor-pointer">
                            <label class="modal-box relative" for="">
                                <h3 class="text-lg font-bold">Wood Toys Shop</h3>
                                <a href="https://bicycle-parts-83ec4.web.app/" target={'https://bicycle-parts-83ec4.web.app/'}><button class="btn btn-active btn-link">Live Site </button></a>
                                <p class="py-4">●About website <br />
                                    - Developed a Bicycle Parts Manufacturer web site with user and admin dashboard
                                    functionality. <br />
                                    - Maintained 100% responsiveness for mobile users to view the web site. <br />
                                    - Controlled register and login system using google firebase authentication system. <br />
                                    ●Tecnology <br />
                                    - React.js, Node.js, Express.js, MongoDB, Tailwind, Firebase.</p>
                            </label>
                        </label>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-60' src={gym} alt="" /></figure>

                    <div className="card-body">
                        <h2 className="card-title">Gym Components</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <label for="my-modal-4" class="btn modal-button">View Details</label>
                        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                        <label for="my-modal-4" class="modal cursor-pointer">
                            <label class="modal-box relative" for="">
                                <h3 class="text-lg font-bold">Gym Components</h3>
                                <a href="https://bicycle-parts-83ec4.web.app/" target={'https://bicycle-parts-83ec4.web.app/'}><button class="btn btn-active btn-link">Live Site </button></a>
                                <p class="py-4">●About website <br />
                                    - Developed a Bicycle Parts Manufacturer web site with user and admin dashboard
                                    functionality. <br />
                                    - Maintained 100% responsiveness for mobile users to view the web site. <br />
                                    - Controlled register and login system using google firebase authentication system. <br />
                                    ●Tecnology <br />
                                    - React.js, Node.js, Express.js, MongoDB, Tailwind, Firebase.</p>
                            </label>
                        </label>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-60' src={mobile} alt="" /></figure>

                    <div className="card-body">
                        <h2 className="card-title">Mobile Phone Search</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <label for="my-modal-4" class="btn modal-button">View Details</label>
                        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                        <label for="my-modal-4" class="modal cursor-pointer">
                            <label class="modal-box relative" for="">
                                <h3 class="text-lg font-bold">Mobile Phone Search</h3>
                                <a href="https://bicycle-parts-83ec4.web.app/" target={'https://bicycle-parts-83ec4.web.app/'}><button class="btn btn-active btn-link">Live Site </button></a>
                                <p class="py-4">●About website <br />
                                    - Developed a Bicycle Parts Manufacturer web site with user and admin dashboard
                                    functionality. <br />
                                    - Maintained 100% responsiveness for mobile users to view the web site. <br />
                                    - Controlled register and login system using google firebase authentication system. <br />
                                    ●Tecnology <br />
                                    - React.js, Node.js, Express.js, MongoDB, Tailwind, Firebase.</p>
                            </label>
                        </label>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-60' src={watch} alt="" /></figure>

                    <div className="card-body">
                        <h2 className="card-title">Watch Store</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <label for="my-modal-4" class="btn modal-button">View Details</label>
                        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                        <label for="my-modal-4" class="modal cursor-pointer">
                            <label class="modal-box relative" for="">
                                <h3 class="text-lg font-bold">Watch Store</h3>
                                <a href="https://bicycle-parts-83ec4.web.app/" target={'https://bicycle-parts-83ec4.web.app/'}><button class="btn btn-active btn-link">Live Site </button></a>
                                <p class="py-4">●About website <br />
                                    - Developed a Bicycle Parts Manufacturer web site with user and admin dashboard
                                    functionality. <br />
                                    - Maintained 100% responsiveness for mobile users to view the web site. <br />
                                    - Controlled register and login system using google firebase authentication system. <br />
                                    ●Tecnology <br />
                                    - React.js, Node.js, Express.js, MongoDB, Tailwind, Firebase.</p>
                            </label>
                        </label>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-60' src={like} alt="" /></figure>

                    <div className="card-body">
                        <h2 className="card-title">My-Insta-Sohor</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <label for="my-modal-4" class="btn modal-button">View Details</label>
                        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                        <label for="my-modal-4" class="modal cursor-pointer">
                            <label class="modal-box relative" for="">
                                <h3 class="text-lg font-bold">My-Insta-Sohor</h3>
                                <a href="https://bicycle-parts-83ec4.web.app/" target={'https://bicycle-parts-83ec4.web.app/'}><button class="btn btn-active btn-link">Live Site </button></a>
                                <p class="py-4">●About website <br />
                                    - Developed a Bicycle Parts Manufacturer web site with user and admin dashboard
                                    functionality. <br />
                                    - Maintained 100% responsiveness for mobile users to view the web site. <br />
                                    - Controlled register and login system using google firebase authentication system. <br />
                                    ●Tecnology <br />
                                    - React.js, Node.js, Express.js, MongoDB, Tailwind, Firebase.</p>
                            </label>
                        </label>
                    </div>
                </div>
                {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-60' src={woodtoy} alt="" /></figure>
                    <div className="card-body">
                        <div className="card-body">
                            <h2 className="card-title">Wood-Toys shop</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <label for="my-modal-4" class="btn modal-button">View Details</label>
                            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                            <label for="my-modal-4" class="modal cursor-pointer">
                                <label class="modal-box relative" for="">
                                    <img src={woodtoy} alt="" />
                                    <h3 class="text-lg font-bold">Bicycle Parts Manufacture</h3>
                                    <a href="https://bicycle-parts-83ec4.web.app/" target={'https://bicycle-parts-83ec4.web.app/'}><button class="btn btn-active btn-link">Live Site </button></a>
                                    <p class="py-4">●About website <br />
                                        - Developed a Bicycle Parts Manufacturer web site with user and admin dashboard
                                        functionality. <br />
                                        - Maintained 100% responsiveness for mobile users to view the web site. <br />
                                        - Controlled register and login system using google firebase authentication system. <br />
                                        ●Tecnology <br />
                                        - React.js, Node.js, Express.js, MongoDB, Tailwind, Firebase.</p>
                                </label>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    );
};

export default Projects;