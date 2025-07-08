FROM ruby:3.2

RUN apt-get update -qq && apt-get install -y \
  nodejs \
  postgresql-client \
  libpq-dev \
  build-essential


WORKDIR /myapp

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

EXPOSE 3001
CMD ["bin/rails", "server", "-b", "0.0.0.0", "-p", "3001"]
