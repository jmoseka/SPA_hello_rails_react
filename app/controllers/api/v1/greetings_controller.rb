module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @greetings = Greeting.all.sample.message
        render json: { greeting: @greetings }
      end
    end
  end
end
