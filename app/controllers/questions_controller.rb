class QuestionsController < ApplicationController
  protect_from_forgery :except => :index
  def index
    @questionnaires = Questionnaire.all
  end

  def new 
  end

  def create

    @question= Questionnaire.new(question_params)

    @question.save
    redirect_to :index 
  end

  
  private
  def question_params
    params.require(:question).permit(:name, :age, :agender, :address, :telephone, :ideas, :advices)
  end
end
