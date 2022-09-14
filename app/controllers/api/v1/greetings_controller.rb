# frozen_string_literal: true

module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @greetings = Greeting.all.sample.greeting
        render json: { greeting: @greetings }
      end
    end
  end
end
