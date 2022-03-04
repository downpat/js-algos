FROM node:16-bullseye-slim

WORKDIR /algos

CMD ["npm", "run", "test"]
