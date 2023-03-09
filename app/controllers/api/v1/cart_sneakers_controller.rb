class Api::V1::CartSneakersController < ApplicationController
  before_action :set_cart_sneaker, only: %i[ show update destroy ]

  # GET /cart_sneakers
  def index
    @cart_sneakers = CartSneaker.all

    render json: @cart_sneakers
  end

  # GET /cart_sneakers/1
  def show
    render json: @cart_sneaker
  end

  # POST /cart_sneakers
  def create
    @cart_sneaker = CartSneaker.new(cart_sneaker_params)

    if @cart_sneaker.save
      render json: @cart_sneaker, status: :created, location: @cart_sneaker
    else
      render json: @cart_sneaker.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cart_sneakers/1
  def update
    if @cart_sneaker.update(cart_sneaker_params)
      render json: @cart_sneaker
    else
      render json: @cart_sneaker.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cart_sneakers/1
  def destroy
    @cart_sneaker.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cart_sneaker
      @cart_sneaker = CartSneaker.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cart_sneaker_params
      params.require(:cart_sneaker).permit(:cart_id, :sneaker_id)
    end
end
