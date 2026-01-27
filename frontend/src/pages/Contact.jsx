import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/common/ScrollReveal';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${API}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: t.contact.form.success });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: t.contact.form.error });
      }
    } catch (error) {
      setStatus({ type: 'error', message: t.contact.form.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#1F4E8D]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {t.contact.title}
              </h1>
              <p className="text-xl text-white/80">{t.contact.subtitle}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <h2
                  className="text-2xl font-bold text-gray-900 mb-8"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
                </h2>

                <div className="space-y-6">
                  {/* Phone/WhatsApp */}
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {t.contact.phone}
                          </h3>
                          <a
                            href={siteConfig.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1F4E8D] hover:underline font-medium text-lg"
                          >
                            {siteConfig.phone}
                          </a>
                          <a
                            href={siteConfig.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 mt-2 text-[#25D366] hover:underline text-sm"
                          >
                            <MessageCircle className="h-4 w-4" />
                            {language === 'en' ? 'Chat on WhatsApp' : 'محادثة عبر واتساب'}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#1F4E8D] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {t.contact.email}
                          </h3>
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-[#1F4E8D] hover:underline font-medium text-lg"
                          >
                            {siteConfig.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Location */}
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {t.contact.location}
                          </h3>
                          <p className="text-gray-600 text-lg">
                            {siteConfig.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={200}>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {language === 'en' ? 'Send a Message' : 'أرسل رسالة'}
                  </h2>

                  {status.message && (
                    <div
                      className={`p-4 rounded-lg mb-6 flex items-center gap-2 ${
                        status.type === 'success'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                      {status.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">{t.contact.form.name} *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">{t.contact.form.email} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">{t.contact.form.subject} *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">{t.contact.form.message} *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1F4E8D] hover:bg-[#163d6e] text-white"
                    >
                      {isSubmitting ? (
                        t.contact.form.sending
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          {t.contact.form.send}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
