class User < ActiveRecord::Base
  attr_reader :password
  validates :email, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i, on: :create }
	validates :email, :password_digest, :session_token, presence: true
	validates :email, uniqueness: true
	validates :password, length: { minimum: 6, allow_nil: true }
  validate :validate_age

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

  has_attached_file :image, default_url: "defaultuser.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :homes,
    class_name: :Home,
    foreign_key: :host_id

  has_many :trips,
    class_name: :Trip,
    foreign_key: :visitor_id

  has_many :reviews,
    class_name: :Review,
    foreign_key: :author_id

	def password=(password)
    @password = password
		self.password_digest = BCrypt::Password.create(password)
	end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    ensure_session_token_uniqueness
    self.save!
    self.session_token
  end


  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end


	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

  def birth_date
    Date.parse("#{day}/#{month}/#{year}")
  end

  def validate_age
    if birth_date.present? && birth_date > 18.years.ago
      errors.add(:birth_day, 'is under 18 years.')
    end
  end
end
