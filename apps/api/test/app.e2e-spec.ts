import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from './../src/app.module.js';

describe('API (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('GET /health', () => {
    return request(app.getHttpServer()).get('/health').expect(200).expect({ status: 'ok' });
  });

  it('POST /auth/register validates with the shared schema', async () => {
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({ email: 'not-an-email' })
      .expect(400);

    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        fullName: 'Sarah Jenkins',
        email: 'sarah@test.com',
        password: 'Pass12345',
        subject: 'stem',
        acceptedTerms: true,
      })
      .expect(201);

    expect(response.body).toMatchObject({ email: 'sarah@test.com' });
    expect(response.body).not.toHaveProperty('password');
  });

  it('GET and PUT /practice-settings', async () => {
    await request(app.getHttpServer()).get('/practice-settings').expect(200);

    await request(app.getHttpServer())
      .put('/practice-settings')
      .send({ hourlyRate: 7 })
      .expect(400);

    const settings = {
      hourlyRate: 85,
      lessonLength: 45,
      paymentPolicy: 'per-lesson',
      cancellationHours: 48,
      remindersEnabled: false,
    };

    await request(app.getHttpServer())
      .put('/practice-settings')
      .send(settings)
      .expect(200)
      .expect(settings);
  });
});
